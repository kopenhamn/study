function logoAnimation() {

    setInterval(function(){
        let i = document.getElementsByClassName('I');

        //style of i
        let iFirstTop = i[0].firstElementChild.style;
        let iFirstBottom = i[0].lastElementChild.style;
        let iSecondTop = i[1].firstElementChild.style;
        let iSecondBottom = i[1].lastElementChild.style;

        iFirstTop.transition = "all 5s ease";
        iFirstBottom.transition = "all 4s ease";
        iSecondTop.transition = "all 9s ease";
        iSecondBottom.transition = "all 7s ease";

        setTimeout(
            function(){
                setTimeout(function logoAnim() {
                    iFirstTop.top = 20 + 'px';
                    iFirstBottom.height = 15 + 'px';
                    iSecondTop.top = 20 + 'px';
                    iSecondBottom.height = 15 + 'px';
                },100)
            },
        100);

        setTimeout(
            function(){
                iFirstTop.transition = "all 0.8s ease";
                iSecondTop.transition = "all 1s ease";
                iFirstBottom.transition = "all 0.1s ease";
                iSecondBottom.transition = "all 0.3s ease";

                setTimeout(function logoAnim() {
                    iFirstTop.top = 0 + 'px';
                    iFirstBottom.height = 54 + 'px';
                    iSecondTop.top = 0 + 'px';
                    iSecondBottom.height = 54 + 'px';
                },100);

                setTimeout(function logoAnim() {
                    iFirstTop.top = 20 + 'px';
                    iFirstBottom.height = 0 + 'px';
                    iSecondTop.top = 20 + 'px';
                    iSecondBottom.height = 0 + 'px';
                },300);

                setTimeout(function logoAnim() {
                    iFirstTop.transition = "all 0.2s ease";
                    iSecondTop.transition = "all 0.3s ease";
                },400);

                setTimeout(function logoAnim() {
                    iFirstTop.top = -10 + 'px';
                    iFirstBottom.height = 54 + 'px';
                    iSecondTop.top = -10 + 'px';
                    iSecondBottom.height = 54 + 'px';
                },500);

                setTimeout(function logoAnim() {
                    iFirstTop.top = 0 + 'px';
                    iSecondTop.top = 0 + 'px';
                },700);
            },
        7890);
    }, 10000);
}
export default logoAnimation
