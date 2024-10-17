let lots = [];

function createLots() {

    const div = document.createElement('div')
    div.className = '_name_box'
    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = '签名'
    input.className = '_name'
    div.appendChild(input)
    document.querySelector('.box__name').appendChild(div)
}

function drawLot() {
    var inputs = document.querySelectorAll('._name'); // 获取所有类名为'_name'的input元素
    let str = []; // 初始化一个空数组来保存输入值
    inputs.forEach(function (input) {
        if (input.value != '') str.push(input.value); // 将每个input的值添加到数组中
    });
    const randomIndex = Math.floor(Math.random() * str.length);

    // 使用随机索引从数组中选取一个元素
    const randomElement = str[randomIndex];

    // 输出选中的元素
    if (str.length == 0) console.log('请输入内容后再点击抽签');

    else {
        document.querySelector('.result_box_result').innerHTML = randomElement;
        document.querySelector('.result').style.display = 'flex';
    }
}

function back() {
    document.querySelector('.result').style.display = 'none';
}