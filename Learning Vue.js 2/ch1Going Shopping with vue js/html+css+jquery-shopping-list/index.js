  $(document).ready(function () {
    /**
     * Add button click handler
     */
    function onAdd() {
      var $ul, li, $li, $label, $div, value;

      value = $('.js-new-item').val();
      //validate against empty values
      if (value === '') {
        return;
      }
      $ul = $('ul');
      $li = $('<li>').appendTo($ul);
      $div = $('<div>')
          .addClass('checkbox')
          .appendTo($li);
      $label = $('<label>').appendTo($div);
      $('<input>')
          .attr('type', 'checkbox')
          .addClass('item')
          .attr('name', 'list')
          .click(toggleRemoved)
          .appendTo($label);
      $label
          .append(value);
      $('.js-new-item').val('');
    }

    /**
     * Checkbox click handler - toggles class removed on li parent element
     * @param ev
     */
    function toggleRemoved(ev) {
      var $el;

      $el = $(ev.currentTarget);
      $el.closest('li').toggleClass('removed');
    }

    function onChangeTitle() {
      $('h2').text($('.js-change-title').val());
    }

    $('.js-add').click(onAdd);
    $('.js-item').click(toggleRemoved);
    $('.js-change-title').keyup(onChangeTitle);
  });