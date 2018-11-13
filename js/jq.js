/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
$(document).ready(function () {
    'use strict';
    $("#services #arrow img").click(function () {
        var gradod, graddo;
        gradod = $('#grad_od').val();
        graddo = $('#grad_do').val();
        $('#grad_od').val(graddo);
        $('#grad_do').val(gradod);
    });
    var now, day, month, today, jmbg, ime, prezime, telefon, mesto_rodjenja, kor_ime, lozinka, kod;
    now = new Date();
    day = ("0" + now.getDate()).slice(-2);
    month = ("0" + (now.getMonth() + 1)).slice(-2);
    today = now.getFullYear() + "-" + (month) + "-" + (day);
    $('#datum_polaska_front').val(today);
    $(function () {
        $('vreme_polaska_front').each(function () {
            var d = new Date(),
                h = d.getHours(),
                m = d.getMinutes();
            if (h < 10) {
                h = '0' + h;
            } else if (m >= 30) {
                m = '30';
            } else if (m < 10) {
                m = '0' + m;
            }
            $(this).attr({
                'value': h + ':' + m
            });
        });
    });
    // /*Radnici*/
    // $("#wrap").hover(function () {
    //     jmbg = $('#services #wrap #jmbg').val().length;
    //     ime = $('#services #wrap #ime').val().length;
    //     prezime = $('#services #wrap #prezime').val().length;
    //     telefon  = $('#services #wrap #br_tel').val().length;
    //     mesto_rodjenja = $('#services #wrap #mesto_rodjenja').val().length;
    //     kor_ime = $('#services #wrap #kor_ime').val().length;
    //     lozinka = $('#services #wrap #lozinka').val().length;
    //     kod = $('#services #wrap #kod_r').val().length;
    //     if (jmbg === 0 && ime === 0 && prezime === 0 && telefon === 0 && mesto_rodjenja === 0 && kor_ime === 0 && lozinka === 0 && kod === 0) {
    //         $("#services #wrap div button#edituj").prop('disabled', true);
    //     }
    // });
    /*Sakriva polja za search*/
    var jmbg1, ime1, kor_ime1, dugme, broj1, broj2, broj3;
    broj1 = 0;
    broj2 = 0;
    broj3 = 0;
    jmbg1 = $('#wrap1 .form-group:nth-child(2)');
    ime1 = $('#wrap1 .form-group:nth-child(3)');
    kor_ime1 = $('#wrap1 .form-group:nth-child(4)');
    dugme = $('#wrap1 div:nth-child(5)');
    $('#wrap1 .form-group select#pretraga1').change(function () {
        if (broj1 === 1) {
            jmbg1.css('display', 'none');
            broj1 = 0;
        }
        if (broj2 === 1) {
            ime1.css('display', 'none');
            broj2 = 0;
        }
        if (broj3 === 1) {
            kor_ime1.css('display', 'none');
            broj3 = 0;
        }
        if ($(this).val() === 'jmbg') {
            jmbg1.css('display', 'block');
            dugme.css('display', 'block');
            broj1++;
        }
        if ($(this).val() === 'ime') {
            ime1.css('display', 'block');
            dugme.css('display', 'block');
            broj2++;
        }
        if ($(this).val() === 'kor_ime1') {
            kor_ime1.css('display', 'block');
            dugme.css('display', 'block');
            broj3++;
        }
        if ($(this).val() === 'drugo1') {
            dugme.css('display', 'none');
        }
    });
    $("#services span#strela").click(function () {
        $('html,body').animate({
                scrollTop: $(window).scrollTop() + 980
            },
            'slow');
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 80) {
            $("#services span#strela").fadeOut(500);
        } else {
            $("#services span#strela").fadeIn(300);
        }

    });
    var marka, registracija, broj4, broj5, dugme1;
    broj4 = 0;
    broj5 = 0;
    marka = $('#wrap1 .form-group:nth-child(3)');
    registracija = $('#wrap1 .form-group:nth-child(2)');
    dugme1 = $('#wrap1 div button');
    $('#wrap1 .form-group select#pretraga1').change(function () {
        if (broj4 === 1) {
            marka.css('display', 'none');
            broj4 = 0;
        }
        if (broj5 === 1) {
            registracija.css('display', 'none');
            broj5 = 0;
        }
        if ($(this).val() === 'marka') {
            marka.css('display', 'block');
            dugme1.css('display', 'block');
            broj4++;
        }
        if ($(this).val() === 'registracija') {
            registracija.css('display', 'block');
            dugme1.css('display', 'block');
            broj5++;
        }
        if ($(this).val() === 'drugo') {
            dugme1.css('display', 'none');
        }
    });
    var grad, drzava, broj6, broj7, dugme2;
    broj6 = 0;
    broj7 = 0;
    grad = $('#wrap1 .form-group:nth-child(2)');
    drzava = $('#wrap1 .form-group:nth-child(3)');
    dugme2 = $('#wrap1 div button');
    $('#wrap1 .form-group select#pretraga1').change(function () {
        if (broj6 === 1) {
            grad.css('display', 'none');
            broj6 = 0;
        }
        if (broj7 === 1) {
            drzava.css('display', 'none');
            broj7 = 0;
        }
        if ($(this).val() === 'grad') {
            grad.css('display', 'block');
            dugme2.css('display', 'block');
            broj6++;
        }
        if ($(this).val() === 'drzava') {
            drzava.css('display', 'block');
            dugme2.css('display', 'block');
            broj7++;
        }
        if ($(this).val() === 'drugo') {
            dugme2.css('display', 'none');
        }
    });
    ////////
    var nazivp, grad1, broj8, broj9, broj10, dugme3, brojr;
    broj8 = 0;
    broj9 = 0;
    broj10 = 0;
    nazivp = $('#wrap1 .form-group:nth-child(2)');
    grad1 = $('#wrap1 .form-group:nth-child(3)');
    brojr = $('#wrap1 .form-group:nth-child(4)');
    dugme3 = $('#wrap1 div button');
    $('#wrap1 .form-group select#pretraga1').change(function () {
        if (broj8 === 1) {
            nazivp.css('display', 'none');
            broj8 = 0;
        }
        if (broj9 === 1) {
            grad1.css('display', 'none');
            broj9 = 0;
        }
        if (broj10 === 1) {
            brojr.css('display', 'none');
            broj10 = 0;
        }
        if ($(this).val() === 'nazivp') {
            nazivp.css('display', 'block');
            dugme3.css('display', 'block');
            broj8++;
        }
        if ($(this).val() === 'gradp') {
            grad1.css('display', 'block');
            dugme3.css('display', 'block');
            broj9++;
        }
        if ($(this).val() === 'brojp') {
            brojr.css('display', 'block');
            dugme3.css('display', 'block');
            broj10++;
        }
        if ($(this).val() === 'drugo') {
            dugme3.css('display', 'none');
        }
    });
    ////////
    var polg, dolg, pdg1, pdg2, broj11, broj12, dugme4, broj13;
    broj11 = 0;
    broj12 = 0;
    broj13 = 0;
    polg = $('#wrap1 .form-group:nth-child(2)');
    dolg = $('#wrap1 .form-group:nth-child(3)');
    pdg1 = $('#wrap1 .form-group:nth-child(4)');
    pdg2 = $('#wrap1 .form-group:nth-child(5)');
    dugme4 = $('#wrap1 div:nth-child(6)');
    $('#wrap1 .form-group select#pretraga1').change(function () {
        if (broj11 === 1) {
            polg.css('display', 'none');
            broj11 = 0;
        }
        if (broj12 === 1) {
            dolg.css('display', 'none');
            broj12 = 0;
        }
        if (broj13 === 1) {
            pdg1.css('display', 'none');
            pdg2.css('display', 'none');
            broj13 = 0;
        }
        if ($(this).val() === 'polazak') {
            polg.css('display', 'block');
            dugme4.css('display', 'block');
            broj11++;
        }
        if ($(this).val() === 'dolazak') {
            dolg.css('display', 'block');
            dugme4.css('display', 'block');
            broj12++;
        }
        if ($(this).val() === 'p-d') {
            pdg1.css('display', 'block');
            pdg2.css('display', 'block');
            dugme4.css('display', 'block');
            broj13++;
        }
        if ($(this).val() === 'drugo') {
            dugme4.css('display', 'none');
        }
    });
    ////////
    var polr, dolr, prevoznik5, cena5, broj14, broj15, dugme15, broj16, cena6, ukupna_cena, ime_radnika;
    broj14 = 0;
    broj15 = 0;
    broj16 = 0;
    polr = $('#wrap1 .form-group:nth-child(2)');
    dolr = $('#wrap1 .form-group:nth-child(3)');
    prevoznik5 = $('#wrap1 .form-group:nth-child(4)');
    cena5 = $('#wrap1 .form-group:nth-child(5)');
    cena6 = $('#wrap1 .form-group:nth-child(6)');
    dugme15 = $('#wrap1 div:nth-child(7) button');
    $('#wrap1 .form-group select#pretraga1').change(function () {
        if (broj14 === 1) {
            polr.css('display', 'none');
            dolr.css('display', 'none');
            broj14 = 0;
        }
        if (broj15 === 1) {
            prevoznik5.css('display', 'none');
            broj15 = 0;
        }
        if (broj16 === 1) {
            cena5.css('display', 'none');
            cena6.css('display', 'none');
            broj16 = 0;
        }
        if ($(this).val() === 'relacija1') {
            polr.css('display', 'block');
            dolr.css('display', 'block');
            dugme15.css('display', 'block');
            broj14++;
        }
        if ($(this).val() === 'prevoznik1') {
            prevoznik5.css('display', 'block');
            dugme15.css('display', 'block');
            broj15++;
        }
        if ($(this).val() === 'cena1') {
            cena5.css('display', 'block');
            cena6.css('display', 'block');
            dugme15.css('display', 'block');
            broj16++;
        }
        if ($(this).val() === 'drugo1') {
            dugme15.css('display', 'none');
        }
    });
    ukupna_cena = $('#u_cena').val();
    ime_radnika = $('#ime_r1').val();
    $('#wrap1').hover(function () {
        if (ukupna_cena === '') {
            $('#isplati1').prop('disabled', true);
        } else {
            $('#isplati1').prop('disabled', false);
        }
        if (ime_radnika === '') {
            $('#u_cena').prop('disabled', true);
        } else {
            $('#u_cena').prop('disabled', false);
        }
    });
    $("#dugme").click(function () {
        $('html, body').animate({
            scrollTop: $("#dugme").offset().top
        }, 2000);
    });

});