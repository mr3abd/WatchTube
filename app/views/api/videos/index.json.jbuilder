json.list_videos @videos.each do |video|
  json.id video.id
  json.user video.user
  json.title video.title
  json.description video.description
  json.thumbnail_url video.thumbnail_url
  json.views video.views
  json.created_at video.created_at
end
