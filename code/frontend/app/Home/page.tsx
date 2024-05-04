"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Index: React.FC<{ email: string }> = ({ email }) => {
    const [inputValue, setInputValue] = useState('a');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [lastWordIndex, setLastWordIndex] = useState<number>(0);

    // Use `email` here
    useEffect(() => {
        console.log('Email:', email);
    }, [email]);


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'F1') {
                handleAutocomplete();
            } else if (event.key === 'F2') {
                handleNextWordSuggestion();
            }
            // enter to to call update
            else if (event.key === 'Enter') {
                handleSubmit();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [inputValue]);

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log(value, "set this value")
        setInputValue(value);

        // Split the input value into words
        const words = value.split(' ');
        const incompleteWord = words[words.length - 1];

        // Fetch suggestions based on the incomplete word
        // fetchSuggestions(incompleteWord);

        // Track the index of the last incomplete word
        setLastWordIndex(words.length - 1);
    };

    const fetchSuggestions = async (input: string) => {
        // Mocking suggestions for demo purposes
        // const mockSuggestions: string[] = ['apple', 'banana', 'orange', 'pear'];
        // setSuggestions(mockSuggestions.filter(suggestion => suggestion.startsWith(input)));
        
        // use axios to fetch data from the backend
        console.log(input)
        const response = await axios.get(`http://localhost:8080/autoCompletionSuggestions?currentWord=${input}`);
        // remove duplicates from results
        const suggestions: string = response.data;
        console.log(suggestions)
        const uniqueSuggestions = suggestions.split(' ').filter((value, index, self) => self.indexOf(value) === index);
        setSuggestions(uniqueSuggestions);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(prevValue => {
            // Replace the incomplete word with the suggestion
            const words = prevValue.split(' ');
            words[lastWordIndex] = suggestion;
            return words.join(' ');
        });
        setSuggestions([]); // Clear suggestions after selecting one
    };

    const handleSubmit = async () => {
        // Send the input value to the backend
        console.log('Sending input to the backend:', inputValue);

        // post request to update the user's words
        console.log(email);
        const response = await axios.post(`http://localhost:8080/update?username=${email}`, {
            words: inputValue.split(' ')
        });

        console.log(response.data);
    };

    const handleAutocomplete = () => {
        // console.log(inputValue, "Autocomp")
        const words = inputValue.split(' ');
        const incompleteWord = words[words.length - 1];
        fetchSuggestions(incompleteWord);
    };

    const handleNextWordSuggestion = () => {
        console.log(inputValue, "next")
        const words = inputValue.split(' ');
        const incompleteWord = words[words.length - 1];
        const previousWord = words.length > 1 ? words[words.length - 2] : '';
        fetchNextWordSuggestions(incompleteWord, previousWord);
    };

    const fetchNextWordSuggestions = async (input: string, previousWord: string) => {
        // Mocking suggestions for demo purposes
        // const mockSuggestions: string[] = ['apples', 'bananas', 'oranges', 'pears'];
        // setSuggestions(mockSuggestions.filter(suggestion => suggestion.startsWith(previousWord + input)));

        // use axios to fetch data from the backend
        console.log(input, previousWord)
        const response = await axios.get(`http://localhost:8080/nextWordSuggestions?currentWord=${input}&lastWord=${previousWord}`);
        console.log(response.data)
        const suggestions: string = response.data;
        const uniqueSuggestions = suggestions.split(' ').filter((value, index, self) => self.indexOf(value) === index);
        setSuggestions(uniqueSuggestions);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation bar */}
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-3xl font-bold text-gray-800">AutoComplete Project</h1>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className="text-gray-800">Hello, User</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Main content */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-lg mx-auto">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Type here..."
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black"
                    />
                    <div className="mt-2">
                        {suggestions.length > 0 && (
                            <div className="border border-gray-300 rounded-md max-h-48 overflow-y-auto">
                                {suggestions.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 bg-white hover:bg-blue-200 cursor-pointer text-black"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
