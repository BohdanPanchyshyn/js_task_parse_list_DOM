'use strict';

const li = [...document.querySelectorAll('ul li')];

const convertToNumber = (string) => {
  const validNumber = +string.slice(1).replaceAll(',', '');

  if (!isNaN(validNumber)) {
    return validNumber;
  }

  return NaN;
};

const sortList = (list) => {
  const ul = list[0].parentElement;

  const employees = getEmployees(list);

  employees.sort((a, b) => {
    return convertToNumber(b.salary) - convertToNumber(a.salary);
  });

  ul.innerHTML = '';

  employees.forEach(({ el }) => ul.appendChild(el));
};

const getEmployees = (list) => {
  const result = list.map((el) => {
    return {
      el,
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });

  return result;
};

sortList(li);
