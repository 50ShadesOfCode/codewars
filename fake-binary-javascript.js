function fakeBin(string){
    ans = ''
    string.split('').map((c, i) => {
        (parseint(c) < 5 ? ans += '0' : ans += '1')
    })
    return ans;
}