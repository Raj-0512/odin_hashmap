class Node
{
	constructor(key , value)
	{
		this.key = key;
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

export default class hashMap
{
	constructor()
	{
	   this.loadFactor = 0.75;
	   this.capacity = 16;
	   this.array = new Array(this.capacity).fill(null);
    } 

    hash(key)
    {
    	const a = (Math.sqrt(5) - 1) / 2;
    	const m = this.capacity;
    	let charCode = 0;

    	for(let i=0; i<key.length; i++)
    	{
    		charCode = charCode + key.charCodeAt(i);
    	}
         
        const fractional = (charCode * a) % 1;
        const hashCode = Math.floor(fractional * m); 
        return hashCode;
    }

     set(key , value)
{
    if(this.length() / this.capacity >= this.loadFactor)
    {
        this.resize();
    }

    const index = this.hash(key);
    let head = this.array[index];

    if(!head)
    {
        this.array[index] = new Node(key , value);
        return;
    }

    let curr = head;
    while(curr)
    {
        if(curr.key === key)
        {
            curr.value = value;
            return;
        }

        if(!curr.next)
        {
            break;
        }

        curr = curr.next;
    }

    const newNode = new Node(key , value);
    curr.next = newNode;
    newNode.prev = curr;
}

    get(key)
    {
    	const index = this.hash(key);
    	let curr = this.array[index];

    	while(curr)
    	{
    		if(curr.key === key)
    		{
    			return curr.value;
    		}
    		curr = curr.next;
    	}
    	return null;
    }

    has(key)
    {
        const index = this.hash(key);
        let curr = this.array[index];

        while(curr)
        {
        	if(curr.key === key)
        	{
        		return true;
        	}

          curr = curr.next;
        }
        return false;
    }

    remove(key)
{
    const index = this.hash(key);
    let curr = this.array[index];

    while(curr)
    {
        if(curr.key === key)
        {
            if(!curr.prev)
            {
                this.array[index] = curr.next;
                if(curr.next)
                {
                    curr.next.prev = null;
                }
            }
            else
            {
                curr.prev.next = curr.next;
                if(curr.next)
                {
                    curr.next.prev = curr.prev;
                }
            }
            return true;
        }
        curr = curr.next;
    }
    return false;
}

        

    length()
    {
        let count = 0;
        for(let i=0; i<this.array.length; i++)
        {
            let curr = this.array[i];
            while(curr)
            {
               count++;
               curr = curr.next;
            }
        }
        return count;
    }

    clear()
    {
        this.array = new Array(this.capacity).fill(null);
    }

    keys()
    {
        let keys = new Array();

        for(let i=0; i<this.array.length; i++)
        {
            let curr = this.array[i];

            while(curr)
            {
                keys.push(curr.key);
                curr = curr.next;
            }
        }
        return keys;
    }

    values()
    {
        let values = new Array();

        for(let i=0; i<this.array.length; i++)
        {
            let curr = this.array[i];

            while(curr)
            {
                values.push(curr.value);
                curr = curr.next;
            }
        }
        return values;
    }

    entries()
    {
        let entries = new Array();

        for(let i=0; i<this.array.length; i++)
        {
            let curr = this.array[i];

            while(curr)
            {
                entries.push([curr.key , curr.value]);
                curr = curr.next;
            }
        }
        return entries;
    }

   resize()
{
    const oldArray = this.array;
    this.capacity = this.capacity * 2;
    this.array = new Array(this.capacity).fill(null);

    for(let i = 0; i < oldArray.length; i++)
    {
        let curr = oldArray[i];
        while(curr)
        {
            this.set(curr.key , curr.value);
            curr = curr.next;
        }
    }
}



}    

const newHashMap = new hashMap();


