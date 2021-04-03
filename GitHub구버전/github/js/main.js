(function (window, document){
    'use strict'; //엄격한 문법으로 작성하겠다

    const $toggles = document.querySelectorAll('.toggle'); //NodeList라는 유사 배열//toggle클래스가 부여된 요소를 모두 찾음
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });//클릭 시 토글됨

    window.addEventListener('resize', function(){
        if(window.innerWidth > 1024){
            //off toggle element
            offElement();
        }
    });//화면의 사이즈가 변경되면 실행

    function toggleElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
        });//toggle이라는 클래스를 가지고 있는데에 on이라는 class를 토글하겠다.
    }
    function offElement(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        });//토글에 on을 제거
    }
})(window, document)
// 이부분에 작성하는 코드가 전체 영역을 더럽힐수있기 때문에 이런방식으로 선언
