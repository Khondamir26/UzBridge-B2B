import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
    const faqs = [
        {
            question: 'How long does it take to enter a new MEA market?',
            answer:
                'Typically 3-6 months depending on the complexity of your product and target market. We provide a detailed timeline during our initial consultation.',
        },
        {
            question: 'Do you provide local language support?',
            answer:
                'Yes, we offer content localization in Arabic, French, and other regional languages as part of our comprehensive packages.',
        },
        {
            question: 'What makes UzBridge different from other agencies?',
            answer:
                'We specialize exclusively in Uzbek tech companies and MEA markets, providing deep cultural understanding and proven local partnerships.',
        },
        {
            question: 'Can you help with regulatory compliance?',
            answer:
                'Absolutely. Our team includes local experts who guide you through regulatory requirements and compliance procedures in each target market.',
        },
        {
            question: "What's included in the marketplace listing?",
            answer:
                'Professional company profile, product showcase, lead generation tools, analytics dashboard, and direct buyer connections.',
        },
        {
            question: 'Do you offer flexible payment terms?',
            answer:
                'Yes, we offer various payment options including monthly subscriptions, quarterly packages, and custom enterprise agreements.',
        },
    ]

    return (
        <section className="py-16 bg-muted animate-fade-in-up">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Common questions about our services and how we can help your
                        business expand into MEA markets.
                    </p>
                </div>

                <div className="flex flex-wrap gap-8 max-w-6xl mx-auto">
                    <Accordion type="single" collapsible className="flex flex-wrap gap-8 w-full">
                        {faqs.map((faq, index) => (
                            <div key={index} className="w-full lg:w-[calc(50%-1rem)]">
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="rounded-2xl border border-border bg-background shadow-xl"
                                >
                                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-base leading-snug break-words">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </div>
                        ))}
                    </Accordion>
                </div>

            </div>
        </section>
    )
}
