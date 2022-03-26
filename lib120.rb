def lib120
    # read file package.json
    file = File.read('package.json')
    if file.include? 'name'
        return file.match("got name of library")[1]
        # save output to a .txt file
        File.open('output.txt', 'w') { |file| file.write(file) }
        puts "JangS100 now working!"
    else
        return 'unknown'
    end
end