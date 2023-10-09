def id_name()
  split_text = self.downcase().split("\s")
  a_result = []
  split_text.each do |text|
    a_result << text[1]
  end
  return a_result.join("")
end
String.prototype.id_name = id_name

