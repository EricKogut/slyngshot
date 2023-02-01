import numpy as np
import pinecone

pinecone.init("fffffffffffffffffffffffff",
              environment='us-west1-gcp')

def create_index(index_name, index_dimensions):
    # if the index does not exist, we create it
    if index_name not in pinecone.list_indexes():
        pinecone.create_index(
            index_name,
            dimension=index_dimensions,
            metric='cosine'
        )
    
    if index_name in pinecone.list_indexes():
        return index_name
    
    return False