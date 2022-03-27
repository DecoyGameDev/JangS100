import lib from "./index";
test("lib()", () => {
    expect(lib()).toBe(true);
    }
);
test("libCreate()", () => {
    expect(libCreate()).toBe(true);
    }
);
test("unRemove()", () => {
    expect(unRemove()).toBe(true);
    }
);
test("deleteCommands()", () => {
    expect(deleteCommands()).toBe(true);
    }
);