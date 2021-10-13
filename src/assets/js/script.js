'use strict';

window.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.select').forEach(function (elem) {

    let selectDefault = elem.querySelector('.select__default');
    let selectOption = elem.querySelector('.select__option');
    let selectOptionItem = selectOption.querySelectorAll('.select__option-item');
    let selectInput = elem.querySelector('.select__input');

    selectDefault.addEventListener('click', function (e) {
      if (e.target && e.target.closest('.select__default')) {
        toggleAndRemove();
      };
    });

    function toggleAndRemove() {
      selectDefault.classList.toggle('isActive');
      selectOption.classList.toggle('isActive');
    };

    selectOptionItem.forEach(function (elem) {
      elem.addEventListener('click', function (e) {
        e.stopPropagation();
        selectDefault.innerHTML = e.currentTarget.innerHTML;
        selectInput.value = e.currentTarget.dataset.value;
        removeClass();
      });
    });

    function removeClass() {
      selectDefault.classList.remove('isActive');
      selectOption.classList.remove('isActive');
    };

    function closeSelectClick() {
      document.addEventListener('click', function (e) {
        if (e.target && e.target.closest('.select__default') !== selectDefault) {
          removeClass();
        };
      });
    };
    closeSelectClick();

    function closeSelectEscape() {
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          removeClass();
        };
      });
    };
    closeSelectEscape();
  });

  function showTempBlock() {
    let tempCheckbox = document.querySelector('.temp__checkbox-input');
    let tempContent = document.querySelector('.temp__content');

    tempCheckbox.addEventListener('click', function (e) {
      if (e.target.disabled !== true) {
        tempContent.classList.toggle('isActive');
      };
    });
  };
  showTempBlock();
});