class DateTimePickerInput < ActiveAdminAddons::InputBase
  def load_control_attributes
    load_class(@options[:class])
    load_data_attr(:picker_options, value: datetime_picker_options)
    load_attr(:maxlength, value: 19)
    load_attr(:autocomplete, value: 'off')
    load_attr(:value, value: formatted_input_value)
    load_attr(:'data-iso8601-value', value: input_value&.in_time_zone&.to_datetime&.iso8601)
  end

  def formatted_input_value
    v = input_value

    if v.is_a?(Time)
      return DateTime.new(v.year, v.month, v.day, v.hour, v.min, v.sec).strftime(
        ActiveadminAddons.datetime_picker_input_format
      )
    end

    v.to_s
  end

  def datetime_picker_options
    @datetime_picker_options ||= begin
      opts = options.fetch(:picker_options, {})
      opts = Hash[opts.map { |k, v| [k.to_s.camelcase(:lower), v] }]
      default_picker_options.merge(opts)
    end
  end

  protected

  def default_picker_options
    res = ActiveadminAddons.datetime_picker_default_options.map do |k, v|
      if v.respond_to?(:call) || v.is_a?(Proc)
        [k, v.call]
      else
        [k, v]
      end
    end
    Hash[res]
  end
end
