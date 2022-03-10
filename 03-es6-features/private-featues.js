class ClassWithPrivateField {
    #privateField = 123;

    getPrivateField() {
        return this.#privateField;
    }
}

class ClasWithPrivateMethod {
    #privateMethod() {
        return 'hello world';
    }
}

class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD;
}

class ClassWithPrivateStaticMethod {
    static #privateStaticMethod() {
        return 'hello world';
    }
}

const pfc1 = new ClassWithPrivateField();
console.log(pfc1.privateField); //undefined
console.log(prf1.getPrivateField()) //123

