        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        AOS.init();
        let nav_links = document.querySelectorAll('.website_landing .navbar .container-fluid  .navbar-collapse .navbar-nav .nav-item .nav-link');
        for (let i = 0, size = nav_links.length; i < size; i++) {
            nav_links[i].addEventListener('click', function () {
                nav_links.forEach((element) => {
                    element.style.color = '#ffffff';
                });
                nav_links[i].style.color = '#f36100';
            });
        }
        let gomla = ['واجهه مرنه وسهله الاستخدام', 'تحكم كامل فى المشتركين', 'تحكم فى حضور المشتركين عن طريق البار كود او رقم الهاتف', 'اداره كامله لانواع الاشتراكات وعدد ايامها وعدد تمارينها وسعرها', 'ادارة كاملة للماليات والايرادات والمصروفات', 'اداره شئون الموظفين وصلاحيات كل موظف', 'جزء خاص بادارة كاملة للمنتجات', 'Smart Manager المتميز في ادارة الجيمات والصالات الرياضية'];
        let holder = document.querySelector('.website_landing>.landing_page>.text>.container-fluid>.holder');
        let start = -1;
        let current = 0;
        let check = "full";
        let time_out = "ok";
        let time = 70;
        let set_holder = setInterval(() => {
            if (time_out == 'ok') {
                time += 70;
                // console.assert
                if (time == 2100) {
                    time_out = 'no';
                    time = 70;
                }
            }
            else {
                if (check == "full") {
                    let str = String(holder.innerHTML);
                    holder.innerHTML = str.slice(0, str.length - 2);
                    if (str.length == 0) {
                        check = "empty";
                        if (start == gomla.length - 1) {
                            start = 0;
                            // console.log(start);
                        }
                        else {
                            start++;
                        }
                        holder.innerHTML = '';
                    }
                }
                else {
                    // holder.innerHTML='';
                    holder.innerHTML += gomla[start][current];
                    current++;
                    if (current == gomla[start].length) {
                        check = "full";
                        current = 0;
                        time_out = "ok";
                    }
                }
            }
        }, 70);
        let open = "close";
        let urls = ['https://www.facebook.com/Smart.Manager15/', 'https://m.me/Smart.Manager15', 'https://wa.me/201142941600', 'https://wa.me/201095732682'];
            let buttons = Array.from(document.querySelectorAll('.contact-us span:not(:last-of-type) i '));
                for (let i = 0, size = buttons.length; i < size; i++) {
                    buttons[i].addEventListener('click', () => {
                        let number = Number(buttons[i].getAttribute('number'));
                        window.location = urls[number];
                        console.log(urls[number]);
                        window.open(url);
                    });
            }
        whatsapp = () => {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            // var date = document.getElementById("date").value;
            var message = document.getElementById("message").value;
            if (email == "") {
                email = "لم يكتب الايميل";
            }
            if (message == "") {
                message = "لم يكتب الرساله";
            }
            // var url1 = "https://wa.me/201142941600?text="
            // +"*الاسم :* "+name+"%0a"
            // +"*الايميل :* "+email+"%0a"
            // +"*رقم الهاتف :* "+phone+"%0a"
            // // +"*Date :* "+date+"%0a"
            // +"*رساله :* "+message;
            var url2 = "https://wa.me/201095732682?text="
            window.open("https://wa.me/201095732682?text=", '_blank').focus();

                + "*الاسم :* " + name + "%0a"
                + "*الايميل :* " + email + "%0a"
                + "*رقم الهاتف :* " + phone + "%0a"
                // +"*Date :* "+date+"%0a"
                + "*رساله :* " + message;

            // window.open(url1,'_blank').focus();
            window.open(url2, '_blank').focus();
        }
        document.querySelector('.contact-with form').onsubmit = () => {
            whatsapp();
        };
        const myCarouselElement = document.querySelector('#carouselExampleCaptions')
        const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2500,
        wrap: true
        })
        // // togller
        let buttom=document.querySelector('.contact-us .closes_icon i');
        let checkb='open';
        buttom.addEventListener('click',(e)=>{
            if(checkb=='open'){
                e.target.setAttribute('class','bi bi-caret-left-fill');
                document.querySelector('.contact-us .closes_icon').style.left='-23px';
                document.querySelector('.contact-us').style.transform="translateY(-30%)  translateX(103%)";
                checkb="close";
            }
            else{
                document.querySelector('.contact-us').style.transform="translateY(-30%)  translateX(0%)";
                e.target.setAttribute('class','bi bi-caret-right-fill');
                document.querySelector('.contact-us .closes_icon').style.left='-11px';
                checkb="open";
            }
        });










