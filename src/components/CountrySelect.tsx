// components/CountrySelect.tsx

import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import { ThemeProvider } from './providers/ThemeProvider';
import { useTheme } from "next-themes"

countries.registerLocale(enLocale);

type CountrySelectProps = {
    value: string;
    onChange: (value: string) => void;
};

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
    const { resolvedTheme } = useTheme()
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        setIsDarkMode(resolvedTheme === "dark")
    }, [resolvedTheme])

    const [options, setOptions] = useState<{ label: string; value: string }[]>([]);

    useEffect(() => {
        const countryObj = countries.getNames('en', { select: 'official' });

        const countryList = Object.entries(countryObj).map(([_, name]) => ({
            value: name,
            label: name,
        }));

        setOptions(countryList);
    }, []);

    return (
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <div className="space-y-2">
                <label className="text-sm font-medium ">
                    Country of Registration *
                </label>
                <Select
                    options={options}
                    placeholder="Choose Country"
                    isSearchable
                    value={options.find(opt => opt.value === value)}
                    onChange={(selected) => onChange(selected?.value || '')}
                    className=" text-sm"
                    classNamePrefix="select"
                    styles={{
                        control: (base) => ({
                            ...base,
                            backgroundColor: isDarkMode ? "#1f1f1f" : "#fff",
                            color: isDarkMode ? "#fff" : "#000",
                            borderColor: isDarkMode ? "#333" : "#ccc",
                            borderRadius: '1rem',
                        }),
                        menu: (base) => ({
                            ...base,
                            backgroundColor: isDarkMode ? "#1f1f1f" : "#fff",
                        }),
                        singleValue: (base) => ({
                            ...base,
                            color: isDarkMode ? "#fff" : "#000",
                        }),
                        option: (base, { isFocused, isSelected }) => ({
                            ...base,
                            backgroundColor: isSelected
                                ? isDarkMode
                                    ? "#444"
                                    : "#e5e5e5"
                                : isFocused
                                    ? isDarkMode
                                        ? "#333"
                                        : "#f0f0f0"
                                    : "transparent",
                            color: isDarkMode ? "#fff" : "#000",
                            cursor: "pointer",
                        }),
                    }}
                />
            </div>
        </ThemeProvider>
    );
};

export default CountrySelect;
