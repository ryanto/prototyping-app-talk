require 'rake-pipeline'
require 'rake-pipeline/middleware'
require "rack/streaming_proxy"

use Rack::StreamingProxy do |request|
  if request.path.start_with?("/api")
    "http://localhost:3000/#{request.path.sub("/api", "")}"
  end
end

use Rake::Pipeline::Middleware, Rake::Pipeline::Project.new("Assetfile")
run Rack::Directory.new('./')
