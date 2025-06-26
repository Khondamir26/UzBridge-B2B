import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      company,
      phone,
      service,
      message,
    });

    // Save to database
    const savedContact = await contact.save();

    return NextResponse.json(
      {
        message: 'Contact form submitted successfully',
        contact: {
          id: savedContact._id,
          name: savedContact.name,
          email: savedContact.email,
          createdAt: savedContact.createdAt,
        },
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Database error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Handle duplicate email (if you add unique constraint)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: GET method to retrieve contacts (for admin panel)
export async function GET() {
  try {
    await connectDB();
    
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .select('-__v'); // Exclude version field

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}