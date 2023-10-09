# Analysis ID '(0)-(1)-(2)':
# (0): is position id from array
# (1): is short todo name
# (2): is boolean

export default class Storage
  SYM_SPLIT = '|'

  def initialize(todoObj)
    @todoObj = todoObj
  end

  def id()
    return @todoObj[:date].gsub(/[\/\s\.\-]/, '') +
      @todoObj[:header].id_name() 
  end

  def get()
    value = localStorage.getItem(id())
    
    unless value
      localStorage.clear()
      return nil
    else
      return value
    end
  end

  def set()
    a_item = []
    @todoObj[:checklist].each_with_index do |todo, i|
      pos = i + 1
      _id = "#{pos}-#{todo.id_name()}"
      id_input = "#{_id}-input"
      is_checked = document
        .get_element_by_id(id_input)
        .has_attribute('checked') ? 1 : 0
      item = "#{_id}-#{is_checked}"
      a_item.push(item)
    end
    items = a_item.join(SYM_SPLIT)

    if items
      localStorage.setItem(id(), items)
      return true
    else
      return false
    end
  end
end
