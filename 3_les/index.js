$(function () {
    class Ball {
        top = 0;
        left = 0;
        directionX = 'RIGTH';
        directionY = 'DOWN';
        canvas$;
        ball$;
        constructor(canvas, ball) {
            this.canvas$ = canvas;
            this.ball$ = ball;
        }

        run() {
            var positionLeft = this.ball$.position().left;
            var positionTop = this.ball$.position().top;
            var borderWidth = this.canvas$.width() - this.ball$.width();
            var borderHeight = this.canvas$.height() - this.ball$.height();

            if (positionLeft == borderWidth) {
                this.directionX = 'LEFT';
            } else if (positionLeft == 0) {
                this.directionX = 'RIGTH';
            }

            if (positionTop == borderHeight) {
                this.directionY = 'UP';
            } else if (positionTop == 0) {
                this.directionY = 'DOWN';
            }

            if (this.directionX == 'RIGTH') {
                $('.box').css('left', this.left++ + 'px');
            } else if (this.directionX == 'LEFT') {
                $('.box').css('left', this.left-- + 'px');
            }


            if (this.directionY == 'DOWN') {
                $('.box').css('top', this.top++ + 'px');
            } else if (this.directionY == 'UP') {
                $('.box').css('top', this.top-- + 'px');
            }
        }

    }
    var ballArray = [];
    var intervalId;

    $('.run').click(function () {
        if (!intervalId) {
            intervalId = setInterval(function () {
                ballArray.forEach(function (ball) {
                    ball.run();
                })
            }, 4);
        }
    })

    $('.stop').click(function () {
        clearInterval(intervalId);
        intervalId = null;
    })

    $('.ball').click(function () {
        var canvas$ = $('.canvas');
        var ball$ = $('<div class="box red">1</div>');
        var ball = new Ball(canvas$, ball$);
        ballArray.push(ball);
        canvas$.append(ball$);
    })
});


