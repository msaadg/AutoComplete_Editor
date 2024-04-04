// Trie.cpp
#include "Trie.h"
#include <iostream>

TrieNode* getNode(void) {
    TrieNode* pNode = new TrieNode;
    pNode->isWordEnd = false;

    for (int i = 0; i < ALPHABET_SIZE; i++)
        pNode->children[i] = nullptr;

    return pNode;
}

void insert(TrieNode* root, const std::string& key) {
    TrieNode* pCrawl = root;

    for (int level = 0; level < key.length(); level++) {
        int index = CHAR_TO_INDEX(key[level]);
        if (!pCrawl->children[index])
            pCrawl->children[index] = getNode();

        pCrawl = pCrawl->children[index];
    }

    pCrawl->isWordEnd = true;
}

bool isLastNode(TrieNode* root) {
    for (int i = 0; i < ALPHABET_SIZE; i++)
        if (root->children[i])
            return false;
    return true;
}

void suggestionsRec(TrieNode* root, std::string currPrefix) {
    if (root->isWordEnd)
        std::cout << currPrefix << std::endl;

    for (int i = 0; i < ALPHABET_SIZE; i++) {
        if (root->children[i]) {
            char child = 'a' + i;
            suggestionsRec(root->children[i], currPrefix + child);
        }
    }
}

int printAutoSuggestions(TrieNode* root, const std::string& query) {
    TrieNode* pCrawl = root;
    for (char c : query) {
        int ind = CHAR_TO_INDEX(c);

        if (!pCrawl->children[ind])
            return 0;

        pCrawl = pCrawl->children[ind];
    }

    if (isLastNode(pCrawl)) {
        std::cout << query << std::endl;
        return -1;
    }
    suggestionsRec(pCrawl, query);
    return 1;
}
