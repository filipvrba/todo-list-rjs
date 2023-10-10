export default class ElmHome < HTMLElement
  def initialize
    super
    
    init_elm()
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def init_elm()
    template = """
    <div class='container py-5 h-100'>
      <div class='row d-flex justify-content-center align-items-center h-100'>
        <elm-todo></elm-todo>
      </div>
    </div>
    """

    self.innerHTML = template
  end
end
