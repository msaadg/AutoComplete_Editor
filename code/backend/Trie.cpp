#include "Trie.h"
#include <iostream>

TrieNode::TrieNode() : children(26, nullptr), isEndOfWord(false) {}

TrieNode::~TrieNode() {
    for (auto child : children) {
        if (child != nullptr) delete child;
    }
}

Trie::Trie() {
    root = new TrieNode();
}

Trie::~Trie() {
    deleteTrie(root);
}

void Trie::insert(const std::string& word) {
    TrieNode* node = root;
    for (char ch : word) {
        int index = ch - 'a';
        if (node->children[index] == nullptr) {
            node->children[index] = new TrieNode();
        }
        node = node->children[index];
    }
    node->isEndOfWord = true;
}

std::vector<std::string> Trie::autocomplete(const std::string& prefix) {
    std::vector<std::string> results;
    TrieNode* node = root;
    for (char ch : prefix) {
        int index = ch - 'a';
        if (node->children[index] == nullptr) {
            return results;
        }
        node = node->children[index];
    }
    // Add a recursive function to collect all words under this node
    collectAllWords(node, prefix, results);
    return results;
}

void Trie::collectAllWords(TrieNode* node, std::string currentPrefix, std::vector<std::string>& results) {
    if (node->isEndOfWord) {
        results.push_back(currentPrefix);
    }
    for (int i = 0; i < 26; ++i) {
        if (node->children[i] != nullptr) {
            char nextChar = 'a' + i;
            collectAllWords(node->children[i], currentPrefix + nextChar, results);
        }
    }
}

void Trie::deleteTrie(TrieNode* node) {
    if (node == nullptr) return;
    for (auto child : node->children) {
        deleteTrie(child);
    }
    delete node;
}