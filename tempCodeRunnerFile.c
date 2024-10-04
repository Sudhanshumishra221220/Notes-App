#include <stdio.h>

struct Employee {
    char name[50];
    float salary;
    int empNo;
    long long contactNo;
};

int main() {
    int n;

    printf("Enter the number of employees: ");
    scanf("%d", &n);

   
    struct Employee employees[n];

    
    for (int i = 0; i < n; ++i) {
        printf("\nEnter details for Employee %d:\n", i + 1);

        printf("Name: ");
        scanf("%s", employees[i].name);

        printf("Salary: ");
        scanf("%f", &employees[i].salary);

        printf("Employee Number: ");
        scanf("%d", &employees[i].empNo);

        printf("Contact Number: ");
        scanf("%lld", &employees[i].contactNo);
    }


    printf("\nEmployees with salary less than 10000:\n");
    
    for (int i = 0; i < n; ++i) {
        if (employees[i].salary < 10000) {
            printf("Name: %s, Salary: %.2f, Employee Number: %d, Contact Number: %lld\n",
                   employees[i].name, employees[i].salary, employees[i].empNo, employees[i].contactNo);
        }
    }

    return 0;
}
