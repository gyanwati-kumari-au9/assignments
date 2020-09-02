Q.Elaborate and explain with a diagram difference between processes and threads
Answer:-
Process:- 
* A process is an instance of a computer program that is being execueted.
* A bundle of elements kept by the Kernel to keep track of all these running tasks.
Architecure of process:-
                   _________________________________
                   |          Process ID            |
                   |________________________________|
                   |                                |
                   |      ____________________      |
                   |      |      MEMORY       |     |
                   |      |___________________|     |
                   |                                |
                   |       ____________________     |
                   |       |     FILES         |    |
                   |       |___________________|    |
                   |                                |
                   |       ____________________     |
                   |       |    REGISTERS      |    |
                   |       |___________________|    |
                   |                                |
                   |       ____________________     |
                   |       |  KERNEL STATE     |    |
                   |       |___________________|    |
                   |________________________________|

Process memory is divided into four sections for efficient working :

*The Text section is made up of the compiled program code, read in from non-volatile storage when the program is launched.
*The Data section is made up the global and static variables, allocated and initialized prior to executing the main.
*The Heap is used for the dynamic memory allocation, and is managed via calls to new, delete, malloc, free, etc.
*Stack:- stacks are fundamental to function calls. Each time a function is called it gets a new stack frame.

                       ___________________________
                       |          STACK           |
                       |            ^             |
                       |            |             |
                       |                          |
                       |                          |
                       |____________|_____________|
                       |          HEAP            |
                       |__________________________|
                       |          DATA            |
                       |__________________________|
                       |         TEXT             |
                       |__________________________|

Files:-A file is a named collection of related information that is recorded on secondary storage such as magnetic disks, 
magnetic tapes and optical disks. In general, a file is a sequence of bits, bytes, lines or records whose meaning is 
defined by the files creator and user.

REGISTERS:- register (CPU register) is one of a small set of data holding places that are part of the computer processor.
A register must be large enough to hold an instruction - for example, in a 64-bit computer, a register must be 64 bits in length

The Kernel is a central module of operating system . It is the first program that is loaded into protected
memory area during the booting process . it communicates to hardware using drivers.
* The Kernel is generally privileged
* Monolithic vs MicroKernels. 

Threads:- A thread is a path of execution within a process. A process can contain multiple threads.
* The fork system calls copies everything include code and data.
* This means the newly created process share the same memory and code.
* This hybrid new process (child) is called a Thread.
* Threads have a number of advantages like 
    1) separate processes can not see each others memory.
    2) switiching processes is quite expensive, and one of the major expenses is keeping track of
       what memory each process is using. By sharing the memory this overhead is avoided and 
       performance can be significantly increased.

Difference between process and Threads:
Process                                                                    Threads
1) Process means a program is in execution.                 1) Thread means a segment of a process.
2) A Process is not Lightweight.                            2) Threads are Lightweight.
3) A Process takes more time to terminate                   3) the thread takes less time to terminate.
4) Process takes more time for creation.                    4) Thread takes less time for creation.
5) Process likely takes more time for context switching.    5) Threads takes less time for context switching.
6) A Process is mostly isolated.                            6) Threads share memory.
7) Process does not share data.                             7) Threads share data with each other.