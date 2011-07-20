class PagesController < ApplicationController
  def index
    
  end  
  
  def generate
    #render :layout => 'scalablegs'
    grid = ["3", "4", "10", "12", "20", "24", "custom"]

    # Create the CSS grid system
    @grid.each do |grid|
      
      system.puts ""
      
      # set temp system callback
      system = 12
      # set initial counter
      counter = 1
      
      # while
      #  system.puts ".grid_" @conunter "-" @gridmax
     
        
      #  counter +=
      # end

      # Reset the counter
      counter = 1
      # while
      #  system.puts
      # end
    end
    
    
    
    
     # Create new file called 'filename.txt' at a specified path.
  #    scalable = File.new("path/filename.txt","w")
      # Write text to the file.
   #   scalable.write "text to be written to file"
      # Close the file.
    #  scalable.close
      
      
      
#     if var == "less"
#       print “Variable is 10″
#         send_file t.path, :type => 'application/zip', :disposition => 'attachment', :filename => "scalablegs.zip"
#     elsif var == "css"
#         print “Variable is 20″
#         send_file t.path, :type => 'application/zip', :disposition => 'attachment', :filename => "scalablegs.zip"
#     else
#         print “Variable is something else”
#     end
      
    
      
  end 
    
    
  def download  
    
    
    
    # Zipping of the file
    
    require 'zip/zip'
    require 'zip/zipfilesystem'
    
    
    
    t = Tempfile.new("temp-file-#{request.remote_ip}")
    # create a temporary file instance
    
    Zip::ZipOutputStream.open(t.path) do |zos|
      some_file_list.each do |file|
        # create a new entry with some arbitrary name
        zos.put_next_entry("some-funny-name.jpg")
        # Add the contents of the file, don't read the stuff linewise if its binary, instead use direct IO
        zos.print IO.read(file.path)
      end
    end
    # End of the block automatically closes the file.
    # Send it using the right mime type, with a download window and some nice file name.
    send_file t.path, :type => 'application/zip', :disposition => 'attachment', :filename => "scalablegs.zip"
    # The temp file will be deleted some time..
    t.close
    
  end

end
