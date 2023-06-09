# MYSTERY-ORGANISM 
## CODECADEMY: FRONT END DEVELOPER PATH: CHALLENGE PROJECT: 
## OVERVIEW 
### This project is a part of codecademy front-end developer path curriculum. Instead of a step-by-step tutorial, this project outlines a series of open-ended requirements which describe the project. There are many possible ways to correctly fullfill all of the requirements. 
## PROJECT GOAL 
### Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study. 
### As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions. 
## SETUP 
### While codecademy does provide a development area, for this project I chose to complete the project on my own computer using visual studio code side-by-side with terminal running node. Provided by codecademy were the two functions returnRandBase() and mockUpStrand(), everything else I wrote, to accomplish the goals of the project. Everything is written in JavaScript, and contained on the file main.js. 
## PREREQUISITES 
### 1. 
### 2. The functions returnRandBase and mockUpStrand are provided by codecademy along with some context about the 4 types of bases that comprise DNA (Adenine, Thymine, Cytosine, and Guanine). returnRandBase generates 1 of the 4 bases, while mockUpStrand generates an array representing a DNA strand containing 15 bases to simulate a mysterious organism. 
### 3. Create a factory function pAequorFactory() that has two parameters:

### The first parameter is a number (no two organisms should have the same number). 
### The second parameter is an array of 15 DNA bases. pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided. 
### 4.To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().

### .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.

### For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again. 
### 5.Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.

### .compareDNA() has one parameter, another pAequor object.

### The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.

### **Later on in the project I thought it beneficial that this function return true or false.**
### 6. P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.

### In the returned object of pAequorFactory(), add another method .willLikelySurvive().

### .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false. 
### 7.With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.