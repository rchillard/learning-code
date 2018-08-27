  	def insert(head,value)
  		#Complete this method
        if head == nil
            current = Node.new(value)
            head = current
        else
            current = head

            while current.next != nil
                current = current.next
            end

            newNode = Node.new(value)
            current.next = newNode
        end
        
        return head
        #return headNode
  	end
 
