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
      todo_obj[:todo].each_with_index do |name, i| 
        pos = i + 1
        # TODO: add fn for id name
        puts name.id_name()
        id = "#{pos}-#{name.id_name()}"
        dom_result << "<li id='#{id}'>#{pos}. #{name}</li>"
      end
      return dom_result.join("\n")
    end

    template = """
    <ul>
      #{l_li_dom()}
    </ul>
    """

    self.innerHTML = template
  end
end
