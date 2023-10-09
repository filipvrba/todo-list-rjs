import 'todoObj', '../../json/todo.json'

export default class ElmTodo < HTMLElement
  def initialize
    super
    
    init_elm()
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

        dom_result << """
<li id='#{id}' class='list-group-item border-0 d-flex align-items-center ps-0'>
  <input id='#{id_input}' class='form-check-input me-3' type='checkbox' value='' aria-label='...' checked />
  <span for='#{id_input}'>#{todo}</span>
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
end
