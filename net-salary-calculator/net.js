function calculateNetSalary() {
    // Input values
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));
  

    const TAX_RATE = 0.3;
    const NHIF_RATE = 0.02;
    const NSSF_RATE = 0.01;
    let grossSalary = basicSalary + benefits;
    let tax = grossSalary * TAX_RATE;
    let NHIFDeductions = grossSalary * NHIF_RATE;
    let NSSFDeductions = grossSalary * NSSF_RATE;
  
    // It calculates the net salary
    let netSalary = grossSalary - tax - NHIFDeductions - NSSFDeductions;
  
    // Display results
    console.log("Gross Salary:", grossSalary);
    console.log("Tax (PAYEE):", tax);
    console.log("NHIF Deductions:", NHIFDeductions);
    console.log("NSSF Deductions:", NSSFDeductions);
    console.log("Net Salary:", netSalary);
  }
  calculateNetSalary();
  