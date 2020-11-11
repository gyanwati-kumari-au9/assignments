#Q.Design a heap with prune down method
class Heap:
    def __init__(self, heap_arr):
        self.heap_arr = heap_arr
        
    def prune_down(self, idx):
        if 2 * idx + 1 > len(self.heap_arr) - 1:
            return

        left = 2 * idx + 1
        right = 2 * idx + 2
        max_idx = idx

        if left <= len(self.heap_arr) - 1 and self.heap_arr[max_idx] < self.heap_arr[left]:
            max_idx = left

        if right <= len(self.heap_arr) - 1 and self.heap_arr[max_idx] < self.heap_arr[right]:
            max_idx = right

        if max_idx != idx:
            self.heap_arr[max_idx], self.heap_arr[idx] = self.heap_arr[idx], self.heap_arr[max_idx]
            self.prune_down(max_idx)
    
    def build_heap(self):
        idx = len(self.heap_arr) - 1
        while idx >= 0:
            self.prune_down(idx)
            idx -= 1
        print("the heap build is ", self.heap_arr)

if __name__ == '__main__':
    heap_arr = [55, 33, 11, 22, 33, 77, 88, 100]
    heap = Heap(heap_arr)
    heap.build_heap()