// $("#polzunok").slider({
//     animate: "slow",
//     range: "min",
//     value: 50,


// });

//This should have each valid amount that can be selected in the slider 
// var sliderAmountMap = [10000, 20000, 30000, 40000, 45000, 50000, 65000];

// $(function() {
//     $("#polzunok").slider({
//         value: 1, //array index of onload selected default value on slider, for example, 45000 in same array will be selected as default on load
//         min: 0, //the values will be from 0 to array length-1
//         max: sliderAmountMap.length - 1, //the max length, slider will snap until this point in equal width increments
//         slide: function(event, ui) {
//             $("#amount").val("$" + sliderAmountMap[ui.value]); //map selected "value" with lookup array
//         }
//     });
//     $("#amount").val("$" + sliderAmountMap[$("#slider").slider("value")]); // 
// });

// var slider = document.getElementById('slider');

// if (slider) {
//     noUiSlider.create(slider, {
//         start: [10],
//         connect: true,
//         step: 10,
//         range: {
//             'min': 0,
//             'max': 100,
//         },

//     });

//     // const input0 = document.getElementById('input-0');
//     // const input0 = document.getElementById('input-1');
//     // const inputs = [input0, input1];


//     slider.noUiSlider.on('update', function(handle) {
//         console.log(handle)
//     });
// }

// $(function() {

//     var mixer = mixitup('.prices__content');
// });