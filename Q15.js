function add_suffix(s) {
    return function add(s1) {
        return s1 + s;
    }
}

let d = add_suffix("ly");
console.log(d("dark"));

