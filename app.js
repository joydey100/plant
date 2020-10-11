function plantChange(anything){
    const plant = document.querySelector('.plant');
    plant.src = anything;
}
function toggleMenu(){
    const toggleChange = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    toggleChange.classList.toggle ('active');
    navigation.classList.toggle ('active');
}