import 'todoObj', '../../json/todo.json'

export default class ElmTodo < HTMLElement
  def initialize
    super
    @storage = Storage.new(todoObj)
    init_elm()

    window.input_change = input_change
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def init_elm()
    l_li_dom = lambda do
      dom_result = []
      todo_obj[:checklist].each_with_index do |todo, i| 
        pos = i + 1
        id = "#{pos}-#{todo.id_name()}"
        id_input = "#{id}-input"

        dom_checked = @storage.get_value(id) ? 'checked' : ''
        dom_result << """
<li id='#{id}' class='list-group-item border-0 d-flex align-items-center ps-0'>
  <div class='form-check'>
    <input id='#{id_input}' class='form-check-input me-3' onchange='inputChange(\"#{id_input}\")' type='checkbox' value='' aria-label='...' #{dom_checked} />
    <label class='form-check-label' for='#{id_input}'>#{todo}</label>
  </div>
</li>
        """
        next
      end
      return dom_result.join("\n")
    end

    template = """
<div class='col col-lg-8 col-xl-6'>
  <div class='card rounded-3'>
    <div class='card-body p-4'>

      <p class='mb-2'><span class='h2 me-2'>#{todoObj[:header]}</span> <span
      class='badge bg-danger'>checklist</span></p>
      <p class='text-muted pb-2'>#{todoObj[:date]}</p>

      <ul class='list-group rounded-0'>
        #{l_li_dom()} 
      </ul>
    </div>
  </div>
</div>
    """

    self.innerHTML = template
  end

  def input_change(id_input)
    input = document.get_element_by_id(id_input)
    is_checked = input.has_attribute('checked')
    if is_checked
      input.remove_attribute('checked')
    else
      input.set_attribute('checked', '')
    end

    @storage.set()
  end
end
