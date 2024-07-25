#!usr/bin/node

// This function will return an iterator to go through every employee in every department.

export default function createIteratorObject(report) {
  const totalEmployee = [];
  for (const idx of Object.values(report.allEmployees)) {
    totalEmployee.push(...idx);
  }

  return totalEmployee;
}

