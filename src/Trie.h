// Trie.h
#ifndef TRIE_H
#define TRIE_H

#include <string>

#define ALPHABET_SIZE (26)
#define CHAR_TO_INDEX(c) ((int)c - (int)'a')

struct TrieNode {
    TrieNode* children[ALPHABET_SIZE];
    bool isWordEnd;
};

TrieNode* getNode(void);
void insert(TrieNode* root, const std::string& key);
bool isLastNode(TrieNode* root);
void suggestionsRec(TrieNode* root, std::string currPrefix);
int printAutoSuggestions(TrieNode* root, const std::string& query);

#endif // TRIE_H
