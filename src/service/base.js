export function getCompanies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        '1001': 'CompanyA',
        '1002': 'CompanyB',
        '1003': 'CompanyC',
      });
    }, 2200)
  })
}

export function getTypes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        '10': 'Type1',
        '20': 'Type2',
        '30': 'Type3',
      });
    }, 500)
  })
}

export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: [
        { comCode: '1001', type: '20' },
        { comCode: '1002', type: '10' },
        { comCode: '1003', type: '30' },
      ]})
    }, 150)
  })
}
