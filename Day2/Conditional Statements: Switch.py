function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0]){
        case('a' || 'e' || 'i'||'o'||'u'):
        return 'A';
        break;
        case('b' || 'c' || 'd'||'f'||'g'):
        return 'B';
        break;
        case('h' || 'j' || 'k'||'l'||'m'):
        return 'C';
        break;
        case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' ):
        return 'D';
    }
    
    
    
}
