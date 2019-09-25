const message = "Some message from myModule.js";

const name = "Alexander";

const location = "California";

const getGreeting = name => {
  return `Thanks for having me (${name})`;
};

export { message, name, getGreeting, location as default };
