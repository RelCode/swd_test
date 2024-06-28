for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("NAVERTICA");
    } else if (i % 3 === 0) {
        console.log("NAV");
    } else if (i % 5 === 0) {
        console.log("ERTICA");
    } else {
        console.log(i);
    }
}
