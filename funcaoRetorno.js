function margemSuperior() {
    //const dim = Dimensions.get('window');
    return 10
    if (Platform.OS === 'ios' && dim.height >= 850) {
        return 38
    } else if (Platform.OS === 'ios' && dim.height < 850) {
        return 25
    } else {
        return 0
    }
}

console.log(margemSuperior())