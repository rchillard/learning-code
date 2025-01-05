# https://devdocs.io/python~3.12/library/html.parser
# https://devdocs.io/python~3.12/library/pathlib#reading-and-writing-files


from html.parser import HTMLParser

class StylesheetUpdater(HTMLParser):
    def __init__(self):
        super().__init__()
        self.updated_html = ""
        self.target_href = "styles.css"  # The href to look for
        self.new_href = "new-styles.css"  # The new href value

    def handle_starttag(self, tag, attrs):
        if tag == "link":
            attr_dict = dict(attrs)
            if attr_dict.get("rel") == "stylesheet" and attr_dict.get("href") == self.target_href:
                # Update the href
                attr_dict["href"] = self.new_href

            # Rebuild the tag with updated attributes
            updated_attrs = " ".join(f'{key}="{value}"' for key, value in attr_dict.items())
            self.updated_html += f"<{tag} {updated_attrs}>"
        else:
            # Add unmodified tags
            self.updated_html += f"<{tag} {' '.join(f'{key}="{value}"' for key, value in attrs)}>"

    def handle_endtag(self, tag):
        self.updated_html += f"</{tag}>"

    def handle_data(self, data):
        self.updated_html += data

    def handle_startendtag(self, tag, attrs):
        self.updated_html += f"<{tag} {' '.join(f'{key}="{value}"' for key, value in attrs)}/>"

# Read the original HTML file
with open("example.html", "r", encoding="utf-8") as file:
    html_content = file.read()

# Parse and update the HTML content
parser = StylesheetUpdater()
parser.feed(html_content)

# Write the updated HTML back to the file
with open("example.html", "w", encoding="utf-8") as file:
    file.write(parser.updated_html)

print("Stylesheet link updated!")
