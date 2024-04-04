// main.cpp
#include "Trie.h"
#include <fstream>
#include <iostream>

int main() {
    TrieNode* root = getNode();

    std::ifstream file("words.txt");
    if (!file.is_open()) {
        std::cerr << "Error: Unable to open file!" << std::endl;
        return 1;
    }

    std::string word;
    while (file >> word) {
        insert(root, word);
    }
    file.close();

    std::string prefix;
    std::cout << "Enter the prefix: ";
    std::cin >> prefix;

    int comp = printAutoSuggestions(root, prefix);

    if (comp == -1)
        std::cout << "No other strings found with this prefix\n";
    else if (comp == 0)
        std::cout << "No string found with this prefix\n";

    return 0;
}
