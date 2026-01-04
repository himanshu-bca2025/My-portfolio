/*
 * Student Database Management System
 * Author: Himanshu Prakash
 * Description: Complete CRUD system for managing student records
 * Features: Add, Edit, Delete, Update, Save, Load
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <conio.h>

#define MAX_STUDENTS 100
#define FILENAME "students.dat"

// Structure to store student information
struct Student {
    int rollNo;
    char name[50];
    int age;
    char course[50];
    float marks;
    char grade;
};

// Global variables
struct Student students[MAX_STUDENTS];
int studentCount = 0;

// Function prototypes
void displayMenu();
void addStudent();
void displayAllStudents();
void searchStudent();
void updateStudent();
void deleteStudent();
void saveToFile();
void loadFromFile();
void clearScreen();
void pause();

// Main function
int main() {
    int choice;
    
    // Load existing data from file
    loadFromFile();
    
    printf("\n========================================\n");
    printf("  STUDENT DATABASE MANAGEMENT SYSTEM\n");
    printf("========================================\n");
    
    do {
        displayMenu();
        printf("\nEnter your choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                addStudent();
                break;
            case 2:
                displayAllStudents();
                break;
            case 3:
                searchStudent();
                break;
            case 4:
                updateStudent();
                break;
            case 5:
                deleteStudent();
                break;
            case 6:
                saveToFile();
                break;
            case 7:
                loadFromFile();
                break;
            case 8:
                printf("\nExiting... Thank you!\n");
                saveToFile(); // Save before exiting
                break;
            default:
                printf("\nInvalid choice! Please try again.\n");
                pause();
        }
    } while(choice != 8);
    
    return 0;
}

// Display main menu
void displayMenu() {
    clearScreen();
    printf("\n========================================\n");
    printf("         MAIN MENU\n");
    printf("========================================\n");
    printf("1. Add New Student\n");
    printf("2. Display All Students\n");
    printf("3. Search Student\n");
    printf("4. Update Student Record\n");
    printf("5. Delete Student Record\n");
    printf("6. Save Data to File\n");
    printf("7. Load Data from File\n");
    printf("8. Exit\n");
    printf("========================================\n");
    printf("Total Students: %d\n", studentCount);
}

// Add new student
void addStudent() {
    clearScreen();
    printf("\n========================================\n");
    printf("         ADD NEW STUDENT\n");
    printf("========================================\n");
    
    if(studentCount >= MAX_STUDENTS) {
        printf("\nDatabase is full! Cannot add more students.\n");
        pause();
        return;
    }
    
    struct Student newStudent;
    
    printf("\nEnter Roll Number: ");
    scanf("%d", &newStudent.rollNo);
    
    // Check if roll number already exists
    for(int i = 0; i < studentCount; i++) {
        if(students[i].rollNo == newStudent.rollNo) {
            printf("\nError: Roll number already exists!\n");
            pause();
            return;
        }
    }
    
    printf("Enter Name: ");
    fflush(stdin);
    gets(newStudent.name);
    
    printf("Enter Age: ");
    scanf("%d", &newStudent.age);
    
    printf("Enter Course: ");
    fflush(stdin);
    gets(newStudent.course);
    
    printf("Enter Marks: ");
    scanf("%f", &newStudent.marks);
    
    // Calculate grade based on marks
    if(newStudent.marks >= 90) {
        newStudent.grade = 'A';
    } else if(newStudent.marks >= 80) {
        newStudent.grade = 'B';
    } else if(newStudent.marks >= 70) {
        newStudent.grade = 'C';
    } else if(newStudent.marks >= 60) {
        newStudent.grade = 'D';
    } else {
        newStudent.grade = 'F';
    }
    
    students[studentCount] = newStudent;
    studentCount++;
    
    printf("\nStudent added successfully!\n");
    printf("Grade assigned: %c\n", newStudent.grade);
    pause();
}

// Display all students
void displayAllStudents() {
    clearScreen();
    printf("\n========================================\n");
    printf("      ALL STUDENT RECORDS\n");
    printf("========================================\n");
    
    if(studentCount == 0) {
        printf("\nNo student records found!\n");
        pause();
        return;
    }
    
    printf("\n%-10s %-25s %-8s %-20s %-10s %-8s\n", 
           "Roll No", "Name", "Age", "Course", "Marks", "Grade");
    printf("----------------------------------------------------------------------------\n");
    
    for(int i = 0; i < studentCount; i++) {
        printf("%-10d %-25s %-8d %-20s %-10.2f %-8c\n",
               students[i].rollNo,
               students[i].name,
               students[i].age,
               students[i].course,
               students[i].marks,
               students[i].grade);
    }
    
    printf("\nTotal Records: %d\n", studentCount);
    pause();
}

// Search student by roll number
void searchStudent() {
    clearScreen();
    printf("\n========================================\n");
    printf("         SEARCH STUDENT\n");
    printf("========================================\n");
    
    if(studentCount == 0) {
        printf("\nNo student records found!\n");
        pause();
        return;
    }
    
    int rollNo;
    printf("\nEnter Roll Number to search: ");
    scanf("%d", &rollNo);
    
    int found = 0;
    for(int i = 0; i < studentCount; i++) {
        if(students[i].rollNo == rollNo) {
            printf("\n========================================\n");
            printf("         STUDENT FOUND\n");
            printf("========================================\n");
            printf("Roll Number: %d\n", students[i].rollNo);
            printf("Name: %s\n", students[i].name);
            printf("Age: %d\n", students[i].age);
            printf("Course: %s\n", students[i].course);
            printf("Marks: %.2f\n", students[i].marks);
            printf("Grade: %c\n", students[i].grade);
            printf("========================================\n");
            found = 1;
            break;
        }
    }
    
    if(!found) {
        printf("\nStudent with Roll Number %d not found!\n", rollNo);
    }
    
    pause();
}

// Update student record
void updateStudent() {
    clearScreen();
    printf("\n========================================\n");
    printf("      UPDATE STUDENT RECORD\n");
    printf("========================================\n");
    
    if(studentCount == 0) {
        printf("\nNo student records found!\n");
        pause();
        return;
    }
    
    int rollNo;
    printf("\nEnter Roll Number to update: ");
    scanf("%d", &rollNo);
    
    int found = -1;
    for(int i = 0; i < studentCount; i++) {
        if(students[i].rollNo == rollNo) {
            found = i;
            break;
        }
    }
    
    if(found == -1) {
        printf("\nStudent with Roll Number %d not found!\n", rollNo);
        pause();
        return;
    }
    
    printf("\nCurrent Information:\n");
    printf("Name: %s\n", students[found].name);
    printf("Age: %d\n", students[found].age);
    printf("Course: %s\n", students[found].course);
    printf("Marks: %.2f\n", students[found].marks);
    
    printf("\nEnter new information (press Enter to keep current value):\n");
    
    printf("Enter Name: ");
    fflush(stdin);
    char tempName[50];
    gets(tempName);
    if(strlen(tempName) > 0) {
        strcpy(students[found].name, tempName);
    }
    
    printf("Enter Age: ");
    char tempAge[10];
    gets(tempAge);
    if(strlen(tempAge) > 0) {
        students[found].age = atoi(tempAge);
    }
    
    printf("Enter Course: ");
    char tempCourse[50];
    gets(tempCourse);
    if(strlen(tempCourse) > 0) {
        strcpy(students[found].course, tempCourse);
    }
    
    printf("Enter Marks: ");
    char tempMarks[10];
    gets(tempMarks);
    if(strlen(tempMarks) > 0) {
        students[found].marks = atof(tempMarks);
        
        // Recalculate grade
        if(students[found].marks >= 90) {
            students[found].grade = 'A';
        } else if(students[found].marks >= 80) {
            students[found].grade = 'B';
        } else if(students[found].marks >= 70) {
            students[found].grade = 'C';
        } else if(students[found].marks >= 60) {
            students[found].grade = 'D';
        } else {
            students[found].grade = 'F';
        }
    }
    
    printf("\nStudent record updated successfully!\n");
    pause();
}

// Delete student record
void deleteStudent() {
    clearScreen();
    printf("\n========================================\n");
    printf("      DELETE STUDENT RECORD\n");
    printf("========================================\n");
    
    if(studentCount == 0) {
        printf("\nNo student records found!\n");
        pause();
        return;
    }
    
    int rollNo;
    printf("\nEnter Roll Number to delete: ");
    scanf("%d", &rollNo);
    
    int found = -1;
    for(int i = 0; i < studentCount; i++) {
        if(students[i].rollNo == rollNo) {
            found = i;
            break;
        }
    }
    
    if(found == -1) {
        printf("\nStudent with Roll Number %d not found!\n", rollNo);
        pause();
        return;
    }
    
    printf("\nStudent to be deleted:\n");
    printf("Roll Number: %d\n", students[found].rollNo);
    printf("Name: %s\n", students[found].name);
    
    char confirm;
    printf("\nAre you sure you want to delete? (y/n): ");
    fflush(stdin);
    scanf("%c", &confirm);
    
    if(confirm == 'y' || confirm == 'Y') {
        // Shift all elements after found index to left
        for(int i = found; i < studentCount - 1; i++) {
            students[i] = students[i + 1];
        }
        studentCount--;
        printf("\nStudent record deleted successfully!\n");
    } else {
        printf("\nDeletion cancelled.\n");
    }
    
    pause();
}

// Save data to file
void saveToFile() {
    FILE *file = fopen(FILENAME, "wb");
    
    if(file == NULL) {
        printf("\nError: Cannot open file for writing!\n");
        pause();
        return;
    }
    
    // Write student count first
    fwrite(&studentCount, sizeof(int), 1, file);
    
    // Write all student records
    fwrite(students, sizeof(struct Student), studentCount, file);
    
    fclose(file);
    
    printf("\nData saved to file successfully!\n");
    printf("Total records saved: %d\n", studentCount);
    pause();
}

// Load data from file
void loadFromFile() {
    FILE *file = fopen(FILENAME, "rb");
    
    if(file == NULL) {
        // File doesn't exist, start with empty database
        studentCount = 0;
        return;
    }
    
    // Read student count
    fread(&studentCount, sizeof(int), 1, file);
    
    // Read all student records
    fread(students, sizeof(struct Student), studentCount, file);
    
    fclose(file);
    
    printf("\nData loaded from file successfully!\n");
    printf("Total records loaded: %d\n", studentCount);
}

// Clear screen
void clearScreen() {
    system("cls");
}

// Pause for user input
void pause() {
    printf("\nPress any key to continue...");
    getch();
}

