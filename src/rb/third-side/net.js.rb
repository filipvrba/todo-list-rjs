export default class Net
  def self.get_json url, &callback
    fetch(url)
    .then(lambda do |response|
      response.json()
    end)
    .then(lambda do |data|
      callback(data) if callback
    end)
  end
end
