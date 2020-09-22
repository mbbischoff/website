# # This has already been run, don't run it again or you'll have double dates. Code could be reused later so I'm keeping it

# require 'front_matter_parser'

# class FrontMatterGenerator
#   def self.generate(hash)
#     keys_and_values = hash.map do |key, value|
#       formatted_value = if value.class == Array
#                           formatted_array = value.map { |element| "\n- \"#{element}\"" }.join
#                           formatted_array
#                         elsif value.class == String
#                           "\"#{value}\""
#                         else
#                           value
#                         end

#       "#{key}: #{formatted_value}"
#     end

#     front_matter_inners = keys_and_values.join("\n")

#     return "---\n#{front_matter_inners}\n---"
#   end
# end

# post_paths = Dir.glob("./_posts/*")

# post_paths.each do |path|

#   parsed_fm = FrontMatterParser::Parser.parse_file(
#     path,
#     syntax_parser: :md,
#     loader: FrontMatterParser::Loader::Yaml.new(whitelist_classes: [Time])
#   )

#   front_matter = parsed_fm.front_matter
#   content = parsed_fm.content

#   year = front_matter["date"]&.year

#   if year
#     if front_matter.has_key?("categories")
#       front_matter["categories"] << year
#     else
#       front_matter["categories"] = [year]
#     end
#   end

#   new_file_string = "#{FrontMatterGenerator.generate(front_matter)}\n\n#{content}"

#   File.open(path, "w") do |file|
#     file.puts new_file_string
#   end
# end