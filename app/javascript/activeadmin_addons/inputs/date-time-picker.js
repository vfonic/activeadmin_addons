var initializer = function() {
  setupDateTimePicker(document)
  $(document).on('submit','form',function() {
    var $form = $(this)
    $form.find('input.date-time-picker-input').each(function() {
      var $dateTimeInput = $(this)
      if ($dateTimeInput.val().trim()) {
        var newValue = new Date($dateTimeInput.val()).toString()
        $form.append('<input type="hidden" name="' + $dateTimeInput.attr('name') + '" value="' + newValue + '">')
      }
    })
  })

  $(document).on('has_many_add:after', '.has_many_container', function(event, fieldset) {
    setupDateTimePicker(fieldset)
  })

  function setupDateTimePicker(container) {
    var defaults = {
      formatDate: 'y-m-d',
      format: 'Y-m-d H:i',
      allowBlank: true,
      defaultSelect: false,
      validateOnBlur: false,
      scrollInput: false,
    }

    var entries = $(container).find('input.date-time-picker-input')
    entries.each(function() {
      var $entry = $(this)
      var options = $entry.data('pickerOptions')
      var mixedOptions = $.extend(defaults, options)
      $entry.datetimepicker(mixedOptions)
      if ($entry.val()) {
        $entry.datetimepicker('setValue', new Date($entry.val()))
      }
      $entry.datetimepicker('validate')
    })
  }
}

$(initializer)
$(document).on('turbolinks:load', initializer)
